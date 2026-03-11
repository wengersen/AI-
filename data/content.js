/**
 * ========================================
 * 网站内容配置文件
 * ========================================
 * 你只需要编辑这个文件来更新所有展示内容
 * 
 * 图片放在 assets/images/ 目录下
 * 视频放在 assets/videos/ 目录下
 * 然后在下面填写对应路径即可
 */

const siteContent = {

  // ==========================================
  // 网站基本信息
  // ==========================================
  hero: {
    title: "AI 在工作中的实际应用",
    subtitle: "提效赋能 · 智慧协作",
    description: "探索AI如何融入日常工作流程，从内容创作到知识管理，全面提升工作效率"
  },

  // ==========================================
  // 第一部分：AI实际工作应用实践
  // ==========================================
  section1: {
    title: "AI 实际工作应用实践",
    subtitle: "五大核心应用方向",

    // ----- AI配音 -----
    aiDubbing: {
      title: "AI 配音",
      icon: "🎙️",
      description: "利用AI技术快速生成高质量的语音配音，支持多种音色和语言，大幅降低配音成本和时间。",
      highlights: [
        "多种音色可选，匹配不同场景需求",
        "支持中英文等多语言配音",
        "生成速度快，秒级出结果",
        "成本低，无需专业录音棚"
      ],
      // 添加案例：每个案例包含标题、描述、图片（可选）、视频（可选）、音频（可选）
      // audio 支持两种写法:
      //   单个音频: audio: "assets/images/AI配音/demo.mp3"
      //   多个音频: audio: [
      //     { label: "音色A", src: "assets/images/AI配音/voice-a.mp3" },
      //     { label: "音色B", src: "assets/images/AI配音/voice-b.mp3" },
      //   ]
      cases: [
        {
          title: "绘梦校园赛季盲盒配音",
          description: "英语配音采用AI原生效果，音色自然、情感表达到位，一致性更好，无需反复调音即可直接使用。",
          image: "",
          video: "",
          audio: [
            { label: "绘心画灵 - 音频1", src: "assets/images/AI配音/绘心画灵1.wav" },
            { label: "绘心画灵 - 音频2", src: "assets/images/AI配音/绘心画灵2.wav" },
            { label: "蛋小黑", src: "assets/images/AI配音/蛋小黑1.wav" }
          ]
        }
      ]
    },

    // ----- AI翻译 -----
    aiTranslation: {
      title: "AI 翻译",
      icon: "🌐",
      description: "基于大语言模型的AI翻译，不仅准确度高，还能理解上下文语境，实现自然流畅的翻译效果。",
      highlights: [
        "上下文感知，翻译更准确",
        "支持专业术语和行业用语",
        "批量翻译，效率倍增",
        "保持原文格式和排版"
      ],
      cases: [
        {
          title: "案例：文档批量翻译",
          description: "在这里填写你的案例说明文字...",
          image: "",
          video: ""
        }
      ]
    },

    // ----- AI制作工具（重点内容）-----
    aiTools: {
      title: "AI 制作工具",
      icon: "🛠️",
      isFeatured: true, // 标记为重点内容
      description: "以「table-merger 跨服合表工具」为例，展示AI如何从零打造一个完整的生产力工具——从需求分析、代码生成、GUI界面到自我进化的知识图谱，全程AI驱动。",
      highlights: [
        "⚡ 性能飞跃：30分钟缩短至2分钟，秒级响应",
        "🔒 全自动流程：自动SVN/Git Update与Lock，告别人工干预",
        "🛡️ 智能保护：识别本地未提交修改，零风险安全合并",
        "🧠 知识图谱：会自我进化的Agent，已沉淀21条核心技术教训"
      ],
      detailedSections: [
        {
          title: "工具概览",
          content: "table-merger 是一款AI驱动的跨服合表效率工具，通过优化解析算法与并发处理实现复杂大表的秒级响应，自动执行SVN/Git的Update与Lock彻底杜绝合表冲突，智能识别本地未提交修改确保安全合并，任务结束后强制自省并结构化归档经验。",
          image: "assets/images/合表工具/合表工具1.png",
          video: ""
        },
        {
          title: "使用说明",
          content: "基于主键的行级对比策略，主键来自项目的元数据系统。用户只需提供SVN源路径、易协作单号和本地目标目录三个参数，工具即可自主执行全流程——直接读取文件、执行shell命令、遇到错误自动修复、持续迭代直到任务完成。",
          image: "assets/images/合表工具/合表工具2.png",
          video: ""
        },
        {
          title: "工具界面",
          content: "表格合并工具v1.0 提供了简洁直观的GUI操作界面，支持路径配置、单号选择、一键执行合并、查看历史、验证报告等功能，实时显示执行进度和日志，让合表操作变得可视化、可追踪。",
          image: "assets/images/合表工具/合表工具3.png",
          video: ""
        }
      ],
      cases: [
        {
          title: "操作演示视频",
          description: "完整展示合表工具的实际操作流程，从配置参数到执行合并的全过程。",
          image: "",
          video: "assets/images/合表工具/合表工具.mp4"
        }
      ]
    },

    // ----- 全流程AI影视生成 -----
    aiFilm: {
      title: "全流程AI影视生成",
      icon: "🎬",
      description: "基于开源工具Waoo，融合影视制作全流程——从故事创意、剧本拆解、分镜生成到成片输出和AI剪辑，策划可以在资源制作初期就根据自己的创意快速制作视频原型，极大降低沟通成本和试错成本。",
      highlights: [
        "📖 故事→剧本：AI辅助剧本创作与自动拆解分镜",
        "🎭 角色生成：自动生成出场角色形象，支持试听配音",
        "🎥 分镜→成片：从剧本自动生成分镜画面并合成成片",
        "✂️ AI剪辑：智能剪辑优化，一站式完成影视制作全流程"
      ],
      cases: [
        {
          title: "Waoo 全流程AI影视生产界面",
          description: "展示从故事、剧本、分镜、成片到AI剪辑的完整工作流程。策划只需输入创意故事，工具自动完成剧本拆解、角色生成、场景绘制等全部环节，让创意快速可视化。",
          image: "assets/images/全流程AI影视生产/全流程 AI 影视生产.jpeg",
          video: ""
        }
      ]
    },

    // ----- PUSH自动化 -----
    aiVideo: {
      title: "PUSH 自动化",
      icon: "🚀",
      description: "通过AI Agent实现PUSH推送全流程自动化，从策划收集、运营规划到多语言日程表生成，流程效率从0.5人天缩短至0.01人天。",
      highlights: [
        "⏱️ 流程效率飞跃：原总计0.5人天，现仅需0.01人天",
        "🤖 Agent自动读取外放日历、生成推送运营规划和多语言日程表",
        "📊 核心成果：工作效率提升、文案质量提升、数据利用提升、团队协作提升",
        "🛠️ 落地操作：skill生成优化 + 数据库搭建 + Prompt调试优化，整体约0.5人天"
      ],
      cases: [
        {
          title: "PUSH自动化全流程",
          description: "展示从push策划对照外放日历→Agent自动读取→生成推送运营规划→收集整理翻译→同步执行的完整自动化链路，以及落地操作步骤和效果展示。",
          image: "assets/images/push自动化/push自动化.png",
          video: ""
        }
      ]
    }
  },

  // ==========================================
  // 第二部分：AI加速信息收集与知识沉淀
  // ==========================================
  section2: {
    title: "AI 加速信息收集与知识沉淀",
    subtitle: "构建个人知识管理体系",
    overviewImage: "assets/images/知识管理总介绍.png",

    // ----- NotebookLM -----
    notebookLM: {
      title: "NotebookLM",
      icon: "📒",
      description: "Google推出的AI笔记工具，能够对上传的文档进行深度理解，支持智能问答、摘要生成、知识关联等功能。",
      overviewImage: "assets/images/notebook/notebook1.png",
      features: [
        {
          title: "智能文档分析",
          description: "支持网页链接、YouTube视频、本地文本、Google Drive文档等四大来源，通过AI分析引擎深度理解内容，一键生成音频播客、视频、幻灯片、信息图等多种产物。",
          image: "assets/images/notebook/notebook3.png"
        },
        {
          title: "交互式问答",
          description: "强大的问答交互能力，直接针对原始资料提问，精准抓取核心观点。例如：帮你搜索GDC游戏设计视频并自动分析生成简报文档。",
          image: "assets/images/notebook/notebook2.png"
        },
        {
          title: "与Gemini深度集成",
          description: "可在Gemini中直接调用NotebookLM笔记本作为知识来源，实现AI对话与知识库的无缝衔接。",
          image: "assets/images/notebook/notebook4.png"
        }
      ],
      tips: [
        "上传高质量的源文档能显著提升回答质量",
        "可以同时上传多个相关文档进行交叉分析",
        "利用音频概览功能在通勤时学习新知识",
        "结合Gemini使用，直接在对话中引用笔记本内容"
      ],
      cases: []
    },

    // ----- Obsidian -----
    obsidian: {
      title: "Obsidian",
      icon: "📝",
      description: "强大的本地知识管理工具，通过双向链接构建知识网络，配合AI插件实现智能化的知识沉淀与检索。",
      overviewImage: "assets/images/obsidian/obsidian1.png",
      features: [
        {
          title: "双向链接与知识网络",
          description: "模仿人类大脑的非线性思考，通过 [[]] 语法将零散笔记织成严密的知识网。笔记之间自动「牵手」，轻松发现知识间的隐藏逻辑。",
          image: "assets/images/obsidian/obsidian2.png"
        },
        {
          title: "AI深度集成（MCP协议）",
          description: "通过MCP协议让AI真正「懂你」——全库视野、实时读写、背景继承，AI从「一无所知」进化为能秒级跨文件全局搜索你的历史策划案、日记与知识库。",
          image: "assets/images/obsidian/obsidian3.png"
        },
        {
          title: "本地大脑与跨端同步",
          description: "100%本地存储，数据主权完全归你。基于Git插件实现全闭环自动化同步，完美打通Windows与macOS工作流，使用纯文本Markdown格式确保知识长期可读。",
          image: "assets/images/obsidian/obsidian5.png"
        }
      ],
      plugins: [
        { name: "Copilot", desc: "AI对话助手，基于笔记内容回答问题" },
        { name: "Dataview", desc: "将笔记作为数据库查询，动态生成内容" },
        { name: "Git", desc: "基于Git实现跨端自动同步与版本管理" },
        { name: "Templater", desc: "模板系统，快速创建结构化笔记" }
      ],
      cases: []
    },

    // ----- 两者结合 -----
    workflow: {
      title: "AI × NotebookLM × Obsidian 终极全自动流水线",
      description: "你不再是「操作员」，而是「指挥官」。只需一句自然语言，AI自动完成：搜索→添加来源→跨源分析→生成产物→写入本地大脑。手动4-8小时→一句话指挥，5分钟完成。",
      image: "assets/images/obsidian/obsidian4.png",
      steps: [
        { step: "1", title: "信息收集", desc: "将各类文档、网页、论文导入NotebookLM" },
        { step: "2", title: "AI分析", desc: "利用NotebookLM对信息进行分析、提问、生成摘要" },
        { step: "3", title: "知识沉淀", desc: "将关键信息整理到Obsidian，建立双向链接" },
        { step: "4", title: "知识复用", desc: "通过Obsidian的搜索和图谱，快速找到所需知识" }
      ]
    }
  },

  // ==========================================
  // 展望 + 总结部分
  // ==========================================
  outlook: {
    title: "未来展望",
    subtitle: "AI赋能海外发行的四大方向",
    items: [
      {
        icon: "🔍",
        title: "海外内容甄别",
        description: "打造智能Skill，自动扫描分析国服所有策划文档内容，判断是否适合上线海外版本，提前识别文化敏感、合规风险等问题，将人工审核前置为AI预筛。",
        color: "#6366f1"
      },
      {
        icon: "🔤",
        title: "自动英文适配",
        description: "在UI拼接阶段，AI自动检测发现英文适配问题——文本溢出、截断、布局错位等，无需等到QA环节才发现，大幅减少返工成本。",
        color: "#f59e0b"
      },
      {
        icon: "🎨",
        title: "资源本地化甄别",
        description: "在资源制作流程中，AI自动识别判断游戏场景、外观资源等是否包含简中内容需要做本地化处理，避免简中内容直接上线海外造成体验问题。",
        color: "#10b981"
      },
      {
        icon: "🔗",
        title: "海外合并监控",
        description: "通过喂入历史案例训练，AI自动发现各模块合入时的边界情况处理问题，提前预警潜在冲突和异常，保障海外版本合并质量。",
        color: "#ef4444"
      }
    ]
  },

  summary: {
    title: "总结",
    points: [
      "AI工具已经可以切实提升日常工作效率",
      "选择合适的工具 + 正确的使用方式 = 最大化收益",
      "知识管理是长期投资，AI让这个过程更轻松",
      "持续探索和学习，保持对新工具的敏感度"
    ],
    closingMessage: "感谢大家的时间！欢迎交流讨论 🙌"
  }
};
