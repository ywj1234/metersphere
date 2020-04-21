export default {
  commons: {
    'workspace': '工作空间',
    'organization': '组织',
    'project': '项目',
    'name': '名称',
    'description': '描述',
    'save': '保存',
    'save_success': '保存成功',
    'delete_success': '删除成功',
    'modify_success': '修改成功',
    'delete_cancel': '已取消删除',
    'confirm': '确定',
    'cancel': '取消',
    'prompt': '提示',
    'operating': '操作',
    'input_limit': '长度在 {0} 到 {1} 个字符',
    'login': '登录',
    'welcome': '欢迎回来，请输入用户名和密码登录MeterSphere',
    'username': '用户名',
    'password': '密码',
    'input_username': '请输入用户名',
    'input_password': '请输入密码',
    'test': '测试',
    'create_time': '创建时间',
    'update_time': '更新时间',
    'add': '添加',
    'member': '成员',
    'email': '邮箱',
    'phone': '电话',
    'role': '角色',
    'personal_info': '个人信息',
    'status': '状态',
    'show_all': '显示全部',
    'report': '报告',
    'user': '用户',
    'system': '系统',
    'personal_setting': '个人设置',
    'test_resource_pool': '测试资源池',
    'system_setting': '系统设置',
    'api': '接口测试',
    'performance': '性能测试',
    'functional': '功能测试',
    'input_content': '请输入内容',
    'create': '新建',
    'refresh': '刷新',
    'remark': '备注',
    'delete': '删除',
    'not_filled': '未填写',
    'please_select': '请选择',
    'search_by_name': '根据名称搜索',
  },
  workspace: {
    'create': '创建工作空间',
    'update': '修改工作空间',
    'delete_confirm': '删除工作空间会级联删除该工作空间下的资源，确定要删除吗?',
    'add': '添加工作空间',
    'input_name': '请输入工作空间名称',
    'search_by_name': '根据名称搜索',
    'organization_name': '所属组织',
    'please_choose_organization': '请选择组织',
  },
  organization: {
    'create': '创建组织',
    'modify': '修改组织',
    'delete_confirm': '这个组织确定要删除吗?',
    'input_name': '请输入组织名称',
    'select_organization': '请选择组织',
    'search_by_name': '根据名称搜索',
    'special_characters_are_not_supported': '不支持特殊字符',
  },
  project: {
    'recent': '最近的项目',
    'create': '创建项目',
    'edit': '编辑项目',
    'delete_confirm': '这个项目确定要删除吗?',
    'search_by_name': '根据名称搜索',
    'input_name': '请输入项目名称',
    'owning_workspace': '所属工作空间',
    'please_choose_workspace': '请选择工作空间',
  },
  member: {
    'create': '添加成员',
    'modify': '修改成员',
    'delete_confirm': '这个用户确定要删除吗?',
    'please_choose_member': '请选择成员',
    'search_by_name': '根据名称搜索',
    'modify_personal_info': '修改个人信息',
    'input_name': '请输入名称',
    'input_email': '请输入邮箱',
    'special_characters_are_not_supported': '不支持特殊字符',
    'mobile_number_format_is_incorrect': '手机号码格式不正确',
    'email_format_is_incorrect': '邮箱格式不正确',
  },
  user: {
    'create': '创建用户',
    'modify': '修改用户',
    'input_name': '请输入用户名',
    'input_id': '请输入ID',
    'input_email': '请输入邮箱',
    'special_characters_are_not_supported': '不支持特殊字符',
    'mobile_number_format_is_incorrect': '手机号码格式不正确',
    'email_format_is_incorrect': '邮箱格式不正确',
    'delete_confirm': '这个用户确定要删除吗?',
  },
  role: {
    'please_choose_role': '请选择角色',
  },
  report: {
    'recent': '最近的报告',
    'search_by_name': '根据名称搜索',
    'test_name': '所属测试',
    'test_overview': '测试概览',
    'test_request_statistics': '请求统计',
    'test_error_log': '错误记录',
    'test_log_details': '日志详情',
    'test_details': '测试详情',
  },
  load_test: {
    'recent': '最近的测试',
    'search_by_name': '根据名称搜索',
    'project_name': '所属项目',
    'delete_confirm': '确认删除测试: ',
    'input_name': '请输入名称',
    'select_project': '请选择项目',
    'save_and_run': '保存并执行',
    'basic_config': '场景配置',
    'pressure_config': '压力配置',
    'advanced_config': '高级配置',
    'runtime_config': '运行配置',
    'is_running': '正在运行！',
    'test_name_is_null': '测试名称不能为空！',
    'project_is_null': '项目不能为空！',
    'jmx_is_null': '只能包含一个JMX文件！',
    'file_name': '文件名',
    'file_size': '文件大小',
    'file_type': '文件类型',
    'file_status': '文件状态',
    'last_modify_time': '修改时间',
    'upload_tips': '将文件拖到此处，或<em>点击上传</em>',
    'upload_type': '只能上传JMX/CSV文件',
    'related_file_not_found': "未找到关联的测试文件！",
    'delete_file_confirm': '确认删除文件: ',
    'delete_file': "请先删除已存在的文件！",
    'thread_num': '并发用户数：',
    'input_thread_num': '请输入线程数',
    'duration': '压测时长（分钟）：',
    'input_duration': '请输入时长',
    'rps_limit': 'RPS上限：',
    'input_rps_limit': '请输入限制',
    'ramp_up_time_within': '在',
    'ramp_up_time_minutes': '分钟内，分',
    'ramp_up_time_times': '次增加并发用户',
    'advanced_config_error': '高级配置校验失败',
    'domain_bind': '域名绑定',
    'domain': '域名',
    'enable': '是否启用',
    'ip': 'IP地址',
    'params': '自定义属性',
    'param_name': '属性名',
    'param_value': '属性值',
    'domain_is_duplicate': '域名不能重复',
    'param_is_duplicate': '参数名不能重复',
    'domain_ip_is_empty': '域名和IP不能为空',
    'param_name_value_is_empty': '参数名和参数值不能为空',
    'connect_timeout': '建立连接超时时间',
    'custom_http_code': '自定义 HTTP 响应成功状态码',
    'separated_by_commas': '按逗号分隔',
    'create': '创建测试',
    'select_resource_pool': '请选择资源池',
    'resource_pool_is_null': '资源池为空',
  },
  api_test: {
    input_name: "请输入测试名称",
    select_project: "请选择项目",
    scenario: {
      input_name: "请输入场景名称",
      name: "场景名称",
      base_url: "基础URL",
      base_url_description: "基础URL作为所有请求的URL前缀",
      variables: "变量",
      headers: "请求头"
    },
    request: {
      input_name: "请输入请求名称",
      name: "请求名称",
      method: "请求方法",
      url: "请求URL",
      url_description: "例如: https://fit2cloud.com",
      parameters: "请求参数",
      parameters_desc: "参数追加到URL，例如https://fit2cloud.com/entries?key1=Value1&Key2=Value2",
      headers: "请求头",
      body: "请求内容",
      body_kv: "键值对",
      body_text: "文本",
      assertions: {
        label: "断言",
        text: "文本",
        regex: "正则",
        response_time: "响应时间",
        select_type: "请选择类型",
        select_subject: "请选择对象",
        select_contains: "请选择条件",
        contains: "包含",
        not_contains: "不包含",
        equals: "等于",
        start_with: "以...开始",
        end_with: "以...结束",
        value: "值",
        expression: "正则表达式",
        response_in_time: "响应时间在...毫秒以内",
      },
      extract: "提取",
    }
  },
  test_track: {
    test_track: "测试跟踪",
    confirm: "确 定",
    cancel: "取 消",
    project: "项目",
    save: "保 存",
    return: "返 回",
    length_less_than: "长度必须小于",
    recent_plan: "最近的计划",
    recent_case: "最近的用例",
    case: {
      test_case: "测试用例",
      case_list: "用例列表",
      create_case: "创建用例",
      no_project: "该工作空间下无项目，请先创建项目",
      priority: "优先级",
      type: "类型",
      method: "测试方式",
      auto: "自动",
      manual: "手动",
      create: "新建用例",
      case_type: "用例类型",
      name: "用例名称",
      module: "所属模块",
      maintainer: "维护人",
      steps: "执行步骤",
      number: "编号",
      prerequisite: "前置条件",
      step_desc: "步骤描述",
      expected_results: "预期结果",
      input_name: "请输入名称",
      input_module: "请选择模块",
      input_maintainer: "请选择维护人",
      input_priority: "请选择优先级",
      input_type: "请选择用例类型",
      input_method: "请选择测试方式",
      input_prerequisite: "请输入前置条件",
      delete_confirm: "确认删除测试用例: ",
      import: {
        import: "导入用例",
        case_import: "导入测试用例",
        download_template: "下载模版",
        click_upload: "点击上传",
        upload_limit: "只能上传xls/xlsx文件，且不超过20M",
        upload_limit_count: "一次只能上传一个文件",
        upload_limit_format: "上传文件只能是 xls、xlsx格式!",
        upload_limit_size: "上传文件大小不能超过 20MB!",
        success: "导入成功！",
      },
      export: {
        export: "导出用例"
      }
    },
    plan: {
      test_plan: "测试计划",
      create_plan: "创建测试计划",
      plan_name: "计划名称",
      plan_project: "所属项目",
      plan_stage: "测试阶段",
      plan_status: "当前状态",
      smoke_test: "冒烟测试",
      functional_test: "功能测试",
      integration_testing: "集成测试",
      system_test: "系统测试",
      version_validation: "版本验证",
      plan_principal: "负责人",
      input_plan_name: "请输入测试计划名称",
      input_plan_principal: "请选择负责人",
      input_plan_project: "请选择所属项目",
      input_plan_stage: "请选择测试阶段",
      plan_status_prepare: "未开始",
      plan_status_running: "进行中",
      plan_status_completed: "已完成",
      plan_delete_confirm: "确认删除测试计划: ",
    },
    module: {
      search: "搜索模块",
      rename: "重命名",
      add_submodule: "添加子模块",
      add_module: "添加模块",
      name: "模块名称",
      delete_confirm: "确认删除模块: ",
      delete_all_resource: "以及模块下所有子模块和测试用例",
    },
    plan_view: {
      plan: "计划",
      relevance_test_case: "关联测试用例",
      executor: "执行人",
      execute_result: "执行结果",
      pass: "通过",
      failure: "失败",
      blocking: "阻塞",
      skip: "跳过",
      actual_result: "实际结果",
      step_result: "步骤执行结果",
      my_case: "我的用例",
      all_case: "全部用例",
      pre_case: "上一条用例",
      next_case: "下一条用例",
      change_execution_results: "更改执行结果",
      change_executor: "更改执行人",
      select_executor: "请选择执行人",
      select_execute_result: "选择执行结果",
      confirm_cancel_relevance: "确认取消关联",
      select_manipulate: "请选择需要操作的数据",
    }
  },
  test_resource_pool: {
    'type': '类型',
    'enable_disable': '启用/禁用',
    'search_by_name': '根据名称搜索',
    'create_resource_pool': '创建资源池',
    'update_resource_pool': '修改资源池',
    'select_pool_type': '选择资源类型',
    'max_threads': '最大并发数',
    'input_pool_name': '请输入资源池名称',
    'pool_name_valid': '资源池名称不支持特殊字符',
    'cannot_remove_all_node': '不能删除所有独立节点',
    'cannot_empty': '资源池不能为空',
    'fill_the_data': '请完善数据',
    'delete_prompt': '此操作将永久删除该资源池, 是否继续?',
    'status_change_success': '状态修改成功!',
  },
  i18n: {
    'home': '首页'
  }
};
