<template>
  <div class="ele-pagination-table-main" v-loading="loading">
    <div class="ele-pagination-table-table">
      <el-table stripe border highlight-current-row
                :reserve-selection="reserveSelection" :row-key="rowKey"
                size="mini" height="100%" ref="ele-pagination-table"
                @row-click="handlerRowClick" @selection-change="handlerSelectionChange"
                @select="handlerSelect" :data="tableData">
        <el-table-column v-if="selection" type="selection" width="40" fixed align="center"></el-table-column>
        <el-table-column v-else-if="radio" width="40" fixed align="center">
          <template slot-scope="{row,column}">
            <i :class="[row[rowKey]==radioRow[rowKey]?'el-icon-success':'el-icon-circle-check']" @click.stop="handlerRadioChange(row,column)"></i>
          </template>
        </el-table-column>
        <el-table-column v-if="index" type="index" width="50" :index="tableIndexMethod" fixed align="center"></el-table-column>
        <slot></slot>
      </el-table>
    </div>
    <el-pagination @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currPage"
                   :total="total"
                   :page-sizes="pageSizes"
                   :page-size="pageSize"
                   small
                   layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ts-nocheck
import { Component, Prop, Vue, Watch, PropSync, Emit, Ref } from 'vue-property-decorator'
import { only } from '@/function/utilsFunction.ts'

@Component({
  name: 'ElePaginationTable',
  computed: {
    reserveSelection: {
      get () {
        if (this.rowKey) return true
        else return false
      }
    }
  }
})
export default class ElePaginationTable extends Vue {

  @Prop({
    type: String,
    default: () => {
      return 'tableId'
    }
  }) readonly rowKey // 行key 多选时用

  @Prop({
    type: Boolean,
    default: () => {
      return false
    }
  }) readonly selection // 多选

  @Prop({
    type: Boolean,
    default: () => {
      return false
    }
  }) readonly radio //单选

  @Prop({
    type: Boolean,
    default: () => {
      return false
    }
  }) readonly index // 索引


  @Prop({
    type: Boolean,
    default: () => {
      return false
    }
  }) loading // 加载中


  @Prop({
    type: Array,
    default: () => {
      return [10, 20, 50, 100]
    }
  }) pageSizes // 加载中

  pageSize = this.pageSizes[0]

  @Prop({
    type: Number,
    default: () => {
      return 1
    }
  }) currentPage // 加载中

  currPage = this.currentPage

  @Prop({
    type: Number,
    default: () => {
      return 1
    }
  }) total // 加载中

  @Prop({
    type: Array,
    default: () => {
      return []
    }
  }) readonly data // 展示数据

  // 展示数据增加唯一id
  tableData = this.data.map((item) => {
    item.tableId = only('table-id')
    return item
  })

  @Emit('page-change')
  emitPageChange () {
    return {
      currPage: this.currPage,
      pageSize: this.pageSize
    }
  }

  @Emit('selection-change')
  emitSelectionChange (val) {
    return val
  }

  @Ref('ele-pagination-table') readonly epTable

  tableIndexMethod (index) {
    // 动态计算表格索引
    return (this.currPage - 1) * this.pageSize + index + 1
  }

  handlerSelect (selection, row) {
    let is = selection.some(item => {
      return item[this.rowKey] == row[this.rowKey]
    })
    if (!is) {
      this.epTable.setCurrentRow()
      this.radioRow = {}
    } else {
      this.epTable.setCurrentRow(row)
      this.radioRow = row
    }
  }

  selectionRow = []

  handlerSelectionChange (selection) {
    // 表格多选emit
    this.emitSelectionChange(selection)
    this.selectionRow = selection
  }

  handlerRowClick (row) {
    // 表格单选emit
    if (this.selection) {
      this.epTable.toggleRowSelection(row)
      this.handlerSelect(this.selectionRow, row)
    } else if (this.radio) {
      this.handlerRadioChange(row)
    }
  }

  // 表格单选数据留存用作状态比较显示
  radioRow = {}

  handlerRadioChange (row) {
    // 表格单选emit
    if (this.radio && !this.selection) {
      if (Object.keys(this.radioRow).length > 0 && this.radioRow[this.rowKey] == row[this.rowKey]) {
        this.radioRow = {}
        this.emitSelectionChange({})
        this.epTable.setCurrentRow()
      } else {
        this.radioRow = row
        this.emitSelectionChange(row)
        this.epTable.setCurrentRow(row)
      }
    }
  }

  // 每页多少条数据emit
  handleSizeChange (val) {
    this.pageSize = val
    this.emitPageChange()
  }

  // 当前页码emit
  handleCurrentChange (val) {
    this.currPage = val
    this.emitPageChange()
  }

  mounted () {
    this.emitPageChange()
  }
}
</script>
<style scoped lang="scss">
  $el-pagination-top: 10px;
  .ele-pagination-table-main {
    width: 100%;
    height: 100%;
    text-align: center;
    .ele-pagination-table-table {
      height: calc(100% - 28px - (#{$el-pagination-top}));
      /deep/ .current-row {
        td {
          @include _background("_theme-color");
          @include _color("_color");
        }
      }
      /deep/ .is-indeterminate, /deep/ .is-checked {
        .el-checkbox__inner {
          @include _background("_vice-color");
          @include _border_color("_border-color");
          &:hover {
            @include _border_color("_border-color");
          }
        }
      }
      /deep/ .is-focus {
        .el-checkbox__inner {
          @include _border_color("_border-color");
        }
      }
      /deep/ .el-checkbox__inner {
        &:hover {
          @include _border_color("_border-color");
        }
      }
      /deep/ .hover-row {
        td {
          @include _background("_head-color");
          @include _color("_color");
        }
      }
      .el-icon-success {
        /*color: #409EFF;*/
        @include _color("_vice-color");
        @include _font-size('_title');
      }
      .el-icon-circle-check {
        color: gainsboro;
        @include _font-size('_title');
      }
    }
    /deep/ .el-pagination {
      margin-top: $el-pagination-top;
      display: inline-block;
      /deep/ .el-pager {
        .active {
          @include _color("_vice-color");
          &:hover {
            @include _color("_vice-color");
          }
        }
        li {
          &:hover {
            @include _color("_vice-color");
          }
        }
      }
      /deep/ .btn-prev, /deep/ .btn-next {
        &:hover {
          @include _color("_vice-color");
        }
      }
      /deep/ .el-pagination__sizes {
        /deep/ .is-focus {
          .el-input__inner {
            @include _border_color("_border-color");
            &:hover {
              @include _border_color("_border-color");
            }
          }
        }
        /deep/ .el-input__inner {
          &:hover {
            @include _border_color("_border-color");
          }
        }
      }
    }
  }

</style>
