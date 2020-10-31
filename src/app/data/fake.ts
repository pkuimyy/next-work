import { Node } from '../model/node';
import { Work } from '../model/work';
import { Result } from '../model/result';
import { Education } from '../model/education'

var fake: Result = new Result
fake.chain = [
    new Node('User', 'User A', 'Field'),
    new Node('Field', '媒体/出版/影视/文化传播', 'Attr_Industry'),
    new Node('Work', 'Recommendation Work', 'SELF_LOOP')
]
fake.last = new Work('国泰广告文化有限公司', '媒体/出版/影视/文化传播', '广告部', '项目经理')
var education_list: Education[] = [
    new Education("广西师范学院", "新闻传播学"),
    new Education()
]
var work_list: Work[] = [
    new Work(
        '爱乐美（北京）文化传播有限公司', '媒体/出版/影视/文化传播', '策划部', '项目经理', '工作描述：\t1、客户的前期洽谈，带领团队进行方案型销售；\t2、负责公司项目的创意策划方案、文字脚本制作方向的把控；\t3、对整个影片项目全程跟踪，把控项目质量和成本，维护客户关系；\t4、合理分配资源，组织协调内部制作团队与外部供应商；\t5、掌控项目的整个执行过程，包括人物的分配、监督、验收、前期预算和最终结算表。'
    ),
    new Work(
        '北京首万远洋文化传播有限公司', '媒体/出版/影视/文化传播', '策划部', '项目经理', '工作描述：\t1、组建项目执行团队，分配项目制作内容；\t2、把控项目制作周期和质量；\t3、维护客户关系，和客户保持良好的合作关系，解决项目过程中出现的所有问题；\t4、带领团队充分协作，共同完成整个项目。'

    ),
    new Work()

]
export { fake, education_list, work_list }