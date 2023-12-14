



CREATE TABLE "Поставщики"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодПоставщика" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"НомерТС" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Номенклатура"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодМатериала" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Стоимость" FLOAT(126) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "АктПриемки"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерАкта" NUMBER(10) NULL,

	"ДатаПриемки" DATE NULL,

	"Поставщики" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтпускМатериала"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПроводки" DATE NULL,

	"Заказ" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Заказ"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЗаказа" NUMBER(10) NULL,

	"ФИОзаказчика" NVARCHAR2(255) NULL,

	"АдресЗаказа" NVARCHAR2(255) NULL,

	"СпособПолучения" NVARCHAR2(9) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Склад"
(

	"primaryKey" RAW(16) NOT NULL,

	"КодСклада" NUMBER(10) NULL,

	"ИмяСклада" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИОсотрудника" NVARCHAR2(255) NULL,

	"Должность" NVARCHAR2(255) NULL,

	"Табель" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПринятыйМат"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерПозиции" NUMBER(10) NULL,

	"Колво" NUMBER(10) NULL,

	"Номенклатура" RAW(16) NOT NULL,

	"Склад" RAW(16) NOT NULL,

	"АктПриемки" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "АктПриемки"
	ADD CONSTRAINT "АктПриемки_FПо_753" FOREIGN KEY ("Поставщики") REFERENCES "Поставщики" ("primaryKey");

CREATE INDEX "АктПриемки_IП_5062" on "АктПриемки" ("Поставщики");

ALTER TABLE "АктПриемки"
	ADD CONSTRAINT "АктПриемки_FС_2529" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "АктПриемки_IС_5195" on "АктПриемки" ("Сотрудники");

ALTER TABLE "ОтпускМатериала"
	ADD CONSTRAINT "ОтпускМатери_2499" FOREIGN KEY ("Заказ") REFERENCES "Заказ" ("primaryKey");

CREATE INDEX "ОтпускМатериа_832" on "ОтпускМатериала" ("Заказ");

ALTER TABLE "ОтпускМатериала"
	ADD CONSTRAINT "ОтпускМатери_7232" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтпускМатери_8449" on "ОтпускМатериала" ("Сотрудники");

ALTER TABLE "Заказ"
	ADD CONSTRAINT "Заказ_FНоменк_7856" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "Заказ_IНоменк_1868" on "Заказ" ("Номенклатура");

ALTER TABLE "ПринятыйМат"
	ADD CONSTRAINT "ПринятыйМат_F_3161" FOREIGN KEY ("Номенклатура") REFERENCES "Номенклатура" ("primaryKey");

CREATE INDEX "ПринятыйМат_I_6503" on "ПринятыйМат" ("Номенклатура");

ALTER TABLE "ПринятыйМат"
	ADD CONSTRAINT "ПринятыйМат_F_7931" FOREIGN KEY ("Склад") REFERENCES "Склад" ("primaryKey");

CREATE INDEX "ПринятыйМат_I_3718" on "ПринятыйМат" ("Склад");

ALTER TABLE "ПринятыйМат"
	ADD CONSTRAINT "ПринятыйМат_F_7999" FOREIGN KEY ("АктПриемки") REFERENCES "АктПриемки" ("primaryKey");

CREATE INDEX "ПринятыйМат_I_3024" on "ПринятыйМат" ("АктПриемки");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


