# 本项目为基于FISCO BCOS 2.0的开发的某地海关清关系统

## 设计该项目的初衷
我们设计的这款产品是针对某地海关旧系统的改造，这款产品也只是这庞大旧系统中的一个模块，通过分析这个模块的机构组织结构和数据的传输的方式，我们理解非常适合使用区块链技术去解决。于是我们将这个模块抽象出来，并将其复杂的业务简化后，试验性的做成了结合区块链的项目demo。

在demo演示的现场，我们听到最多的问题是：“为什么不用一个中央数据库去解决你的问题？”。我们产品的使用场景不是在中国大陆，所以用中国大陆的法律去思考这个业务是有误的。此地区个人隐私法比较严厉，政府也无法让某些机构的数据进行交换，提前将数据抽取出来存在某一个数据库中也更是不被允许的事情。更多关于该地区法律问题在此就不过多细述。

## 产品的设计原理
所以在产品设计的初始，我们使用的是区块链结合系统接口的方式去解决以上的问题。在介绍产品的设计原理前先简单介绍与产品相关的四个机构分别为及职责：
#### 某公司：负责在权限机构和海关间使用XML文件进行数据的接收和传递；
#### 权限部门：负责对不同类型的货物审核签名，如：枪支弹药-公安局/药品-卫生局；
#### 海关：对外贸经营人申请清关和权限机构已审核签名的货物，进行审核。审核通过后，货物即为同意清关状态；
#### 统计局：定时向海关申请获取相关数据进行数据的统计和分析。
旧系统机构间的组织结构和数据传输方式如下简图：

![Image text](https://github.com/RobinLG/DoraHacks/blob/master/img/%E5%8E%9F%E6%B5%81%E7%A8%8B.png)

结合FISCO-BCOS改造后的新系统的结构和流程截图如下：

![Image text](https://github.com/RobinLG/DoraHacks/blob/master/img/%E6%B5%81%E7%A8%8B%E5%9B%BE.png)

注意：为了使简图清晰易懂，简化了其中的一些流程和文字，如有引起误解还请读者谅解。

## 产品具体能解决什么问题？
### 旧系统存在的问题
  
a)	各机构与外贸经营人间通过第三方网络转发信息，数据可能会缓存第三方数据库，泄露报关单信息；

b)	系统现状高度依赖第三方公司，若第三方公司的服务器出现宕机，该系统就无法提供服务。对货物流通量每日近万的海关来说，代价是巨大的；

c)	各机构与外贸经营人间是通过xml文件转发信息，xml文件大小往往比纯文本字段要大，因此会导致网络消耗大，传输效率低。且存在被篡改的可能。



### 改进后的优点
d)	除必须要保存在权限机构的数据外，无需储存数据的机构介绍了服务器空间成本；

e)	各节点为系统直接的参与方，无需找第三方机构转送文件内容，避免数据泄露；

f)	相较于前面提出的第三方公司服务器出现宕机的情况，改造后的系统容错性增加；

g)	各机构间无需通过庞大的XML文件传输，减少网络消耗，增加传输效率，并且确保资料不被篡改；

h)	将税务信息上链，保证了税务的公开透明和真实性，这大大有利于政府的税收保证。

  

## 产品投放期望
由于该地区海关每日有上万单的货物需要清关，旧系统也承载了这个货物的处理量。若该产品投入后我们希望除了能满足原先货物清关的处理量。还能让原先处处存放XML文件的机构部门减少成本；依托区块链的不可篡改性，每笔链上的单据签名都能把责任落实到相关的部门；统计部门可从自身区块链节点直接获取链上数据进行统计，减少海关和其自身对于数据处理的工作量；提供透明的税务信息，若有关税务部门获取所有货物单的税务信息，只需接入联盟链，使用简便和低成本的方法即可获取税务信息。

