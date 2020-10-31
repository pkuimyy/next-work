import { Node } from '../model/node';
import { Work } from '../model/work';
import { Result } from '../model/result';

var fake: Result = new Result
fake.chain = [new Node, new Node, new Node]
fake.last = new Work
fake.chain[0].fill('User', 'User A', 'Field')
fake.chain[1].fill('Field', '媒体/出版/影视/文化传播', 'Attr_Industry')
fake.chain[2].fill('Work', 'Recommendation Work', 'SELF_LOOP')
fake.last.fill('北京集通物业管理有限公司', '房地产/建筑/建材/工程', '财务部', '财务会计->财务&会计')
export { fake }