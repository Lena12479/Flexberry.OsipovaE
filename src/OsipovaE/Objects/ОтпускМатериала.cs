﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.OsipovaE
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Отпуск материала.
    /// </summary>
    // *** Start programmer edit section *** (ОтпускМатериала CustomAttributes)

    // *** End programmer edit section *** (ОтпускМатериала CustomAttributes)
    [AutoAltered()]
    [Caption("Отпуск материала")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОтпускМатериалаE", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Заказ.НомерЗаказа as \'Номер заказа\'",
            "Заказ.ФИОзаказчика as \'Ф и озаказчика\'",
            "Заказ.АдресЗаказа as \'Адрес заказа\'",
            "Заказ.СпособПолучения as \'Способ получения\'",
            "Сотрудники.ФИОсотрудника as \'Ф и осотрудника\'",
            "Сотрудники.Должность as \'Должность\'"}, Hidden=new string[] {
            "Заказ.ФИОзаказчика",
            "Сотрудники.ФИОсотрудника"})]
    [View("ОтпускМатериалаL", new string[] {
            "ДатаПроводки as \'Дата проводки\'",
            "Заказ.ФИОзаказчика as \'Ф и озаказчика\'",
            "Сотрудники.ФИОсотрудника as \'Ф и осотрудника\'"})]
    public class ОтпускМатериала : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаПроводки;
        
        private IIS.OsipovaE.Заказ fЗаказ;
        
        private IIS.OsipovaE.Сотрудники fСотрудники;
        
        // *** Start programmer edit section *** (ОтпускМатериала CustomMembers)

        // *** End programmer edit section *** (ОтпускМатериала CustomMembers)

        
        /// <summary>
        /// ДатаПроводки.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки CustomAttributes)
        public virtual System.DateTime ДатаПроводки
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get start)
                System.DateTime result = this.fДатаПроводки;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set start)
                this.fДатаПроводки = value;
                // *** Start programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)

                // *** End programmer edit section *** (ОтпускМатериала.ДатаПроводки Set end)
            }
        }
        
        /// <summary>
        /// Отпуск материала.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.Заказ CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.Заказ CustomAttributes)
        [PropertyStorage(new string[] {
                "Заказ"})]
        [NotNull()]
        public virtual IIS.OsipovaE.Заказ Заказ
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Get start)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Get start)
                IIS.OsipovaE.Заказ result = this.fЗаказ;
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Get end)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Set start)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Set start)
                this.fЗаказ = value;
                // *** Start programmer edit section *** (ОтпускМатериала.Заказ Set end)

                // *** End programmer edit section *** (ОтпускМатериала.Заказ Set end)
            }
        }
        
        /// <summary>
        /// Отпуск материала.
        /// </summary>
        // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (ОтпускМатериала.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.OsipovaE.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get start)
                IIS.OsipovaE.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Get end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set start)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (ОтпускМатериала.Сотрудники Set end)

                // *** End programmer edit section *** (ОтпускМатериала.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОтпускМатериалаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаE", typeof(IIS.OsipovaE.ОтпускМатериала));
                }
            }
            
            /// <summary>
            /// "ОтпускМатериалаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОтпускМатериалаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОтпускМатериалаL", typeof(IIS.OsipovaE.ОтпускМатериала));
                }
            }
        }
    }
}
