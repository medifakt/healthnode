  /**
  * @param {org.clinicaltrials.createPrescription} prescriptionData
  * @transaction
  */
  function createPrescription(prescriptionData){
    return getAssetRegistry('org.clinicaltrials.prescription').then((prescriptionRegistry)=>{
        var factory=getFactory();
        
      
        var pid=prescriptionData.pid;
        var newPrescription=factory.newResource('org.clinicaltrials','prescription',pid);
        var newPrescriptionEvent=factory.newEvent('org.clinicaltrials','onCreatePrescriptionEvent');
        var relationship=getCurrentParticipant();
        newPrescription.Doctor=relationship;
        newPrescription.Patient=prescriptionData.Patient;
        newPrescription.Medication=prescriptionData.Medication;
        newPrescription.Instructions=prescriptionData.Instructions;
        newPrescription.Refills_Remaining=prescriptionData.Refills_Remaining;
        newPrescription.Last_Filled_On=prescriptionData.Last_Filled_On;
        newPrescription.Initially_Ordered_On=prescriptionData.Initially_Ordered_On;
        newPrescription.p_details=prescriptionData.p_details;
        newPrescription.Visit=prescriptionData.Visit;
        newPrescription.allowed=[relationship];
        newPrescriptionEvent.pid=pid;
        newPrescriptionEvent.Doctor=relationship;
        newPrescriptionEvent.Patient=prescriptionData.Patient;
        newPrescriptionEvent.Medication=prescriptionData.Medication;
        newPrescriptionEvent.Instructions=prescriptionData.Instructions;
        newPrescriptionEvent.Refills_Remaining=prescriptionData.Refills_Remaining;
        newPrescriptionEvent.Last_Filled_On=prescriptionData.Last_Filled_On;
        newPrescriptionEvent.Initially_Ordered_On=prescriptionData.Initially_Ordered_On;
        newPrescriptionEvent.Visit=prescriptionData.Visit;
        emit(newPrescriptionEvent);
        return prescriptionRegistry.add(newPrescription); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.createProblem} problemData
  * @transaction
  */
  function onCreateProblem(problemData){
    return getAssetRegistry('org.clinicaltrials.Problem').then((problemRegistry)=>{
        var factory=getFactory();
     
        var reportID=problemData.reportID;
        var newProblem=factory.newResource('org.clinicaltrials','Problem',reportID)
        var newProblemEvent=factory.newResource('org.clinicaltrials','onCreateProblemEvent',reportID)
        var relationship=getCurrentParticipant();
        newProblem.allowed=[relationship];
        newProblem.Patient=problemData.Patient;
        newProblem.Problem=problemData.Problem;
        newProblem.Provider=problemData.Provider;
        newProblem.Location=problemData.Location;
        newProblem.Visit=problemData.Visit;
        newProblem.Date_Recieved=problemData.Date_Recieved;
        newProblemEvent.reportID=problemData.reportID;
        newProblemEvent.Patient=problemData.Patient;
        newProblemEvent.Problem=problemData.Problem;
        newProblemEvent.Provider=problemData.Provider;
        newProblemEvent.Location=problemData.Location;
        newProblemEvent.Date_Recieved=problemData.Date_Recieved;
        newProblemEvent.Visit=problemData.Visit;
        emit(newProblemEvent)
        return problemRegistry.add(newProblem); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.createAllergy} allergyData
  * @transaction
  */
  function onCreateAllergy(allergyData){
    return getAssetRegistry('org.clinicaltrials.Allergy').then((allergyRegistry)=>{
        var factory=getFactory();
      
        var reportID=allergyData.reportID;
        var newAllergy=factory.newResource('org.clinicaltrials','Allergy',reportID);
        var newAllergyEvent=factory.newEvent('org.clinicaltrials','onCreateAllergy');
        var relationship=getCurrentParticipant();
        newAllergy.allowed=[relationship];
        newAllergy.Patient=allergyData.Patient;
        newAllergy.Allergy_Name=allergyData.Allergy_Name;
        newAllergy.Allergy_Type=allergyData.Allergy_Type;
        newAllergy.location=allergyData.location;
        newAllergy.Reaction=allergyData.Reaction;
        newAllergy.Drug_Class=allergyData.Drug_Class;
        newAllergy.ObservedOrHistorical=allergyData.ObservedOrHistorical;
        newAllergy.Date_Entered=allergyData.timestamp;
        newAllergy.Comments=allergyData.Comments;
        newAllergy.Visit=allergyData.Visit;
        newAllergy.Status="ACTIVE";
        newAllergyEvent.Patient=allergyData.Patient;
        newAllergyEvent.reportID=allergyData.reportID;
        newAllergyEvent.Allergy_Name=allergyData.Allergy_Name;
        newAllergyEvent.Allergy_Type=allergyData.Allergy_Type;
        newAllergyEvent.location=allergyData.location;
        newAllergyEvent.Reaction=allergyData.Reaction;
        newAllergyEvent.Drug_Class=allergyData.Drug_Class;
        newAllergyEvent.ObservedOrHistorical=allergyData.ObservedOrHistorical;
        newAllergyEvent.Date_Entered=allergyData.timestamp;
        newAllergyEvent.Comments=allergyData.Comments;
        newAllergyEvent.Visit=allergyData.Visit;
        newAllergyEvent.Status="ACTIVE";
        emit(newAllergyEvent);
        return allergyRegistry.add(newAllergy); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.createImmunizations} immunizationData
  * @transaction
  */
  function onCreateImmunization(immunizationData){
    return getAssetRegistry('org.clinicaltrials.Immunizations').then((immunizationsRegistry)=>{
        var factory=getFactory();
      
        var reportID=immunizationData.reportID;
        var newImmunization=factory.newResource('org.clinicaltrials','Immunizations',reportID)
        var newImmunizationEvent=factory.newEvent('org.clinicaltrials','onCreateImmunizationsReport');
        var relationship=getCurrentParticipant();
        newImmunization.allowed=[relationship];
        newImmunization.Immunization_Name=immunizationData.Immunization_Name;
        newImmunization.Date_Recieved=immunizationData.Date_Recieved;
        newImmunization.Location=immunizationData.Location;
        newImmunization.Reaction=immunizationData.Reaction;
        newImmunization.Comments=immunizationData.Comments;
        newImmunization.Patient=immunizationData.Patient;
        newImmunization.Visit=immunizationData.Visit;
        newImmunizationEvent.reportID=immunizationData.reportID;
        newImmunizationEvent.Immunization_Name=immunizationData.Immunization_Name;
        newImmunizationEvent.Date_Recieved=immunizationData.Date_Recieved;
        newImmunizationEvent.Location=immunizationData.Location;
        newImmunizationEvent.Reaction=immunizationData.Reaction;
        newImmunizationEvent.Comments=immunizationData.Comments;
        newImmunizationEvent.Patient=immunizationData.Patient;
        newImmunizationEvent.Visit=immunizationData.Visit;
        
        emit(newImmunizationEvent);
        return immunizationsRegistry.add(newImmunization); 
        
      })
  }
  /** 
      
  */
  /**
  * @param {org.clinicaltrials.createRadiologyReports} radiologyReportsData
  * @transaction
  */
  function onCreateRadiologyReports(radiologyReportsData){
    return getAssetRegistry('org.clinicaltrials.Radiology_reports').then((radiologyReportsRegistry)=>{
        var factory=getFactory();
      
        var reportID=radiologyReportsData.reportID;
        var newRadiologyReport=factory.newResource('org.clinicaltrials','Radiology_reports',reportID)
        var relationship=getCurrentParticipant();
        newRadiologyReport.allowed=[relationship];
        newRadiologyReport.Radiologist=relationship;
        newRadiologyReport.Procedure_Name=radiologyReportsData.Procedure_Name;
        newRadiologyReport.Performed=radiologyReportsData.Performed;
        newRadiologyReport.Ordering_Location=radiologyReportsData.Ordering_Location;
        newRadiologyReport.Requesting_Provider=radiologyReportsData.Requesting_Provider;
        newRadiologyReport.Reason_for_Study=radiologyReportsData.Reason_for_Study;
        newRadiologyReport.Performing_Location=radiologyReportsData.Performing_Location;
        newRadiologyReport.Clinical_History=radiologyReportsData.Clinical_History;
        newRadiologyReport.Patient=radiologyReportsData.Patient;
      
        newRadiologyReport.Status="ACTIVE";
        return radiologyReportsRegistry.add(newRadiologyReport); 
        
      })
  }

  /**
  * @param {org.clinicaltrials.createCRF} CRFData
  * @transaction
  */
  function onCreateCRF(CRFData){
    return getAssetRegistry('org.clinicaltrials.CRFDocument').then((CRFRegistry)=>{
        var factory=getFactory();
        var docid=CRFData.docID
        var newCRF=factory.newResource('org.clinicaltrials','CRFDocument',docid)
        var relationship=getCurrentParticipant();
        newCRF.time=CRFData.timestamp;
        newCRF.Patient=CRFData.Patient;
        newCRF.baseline_details=CRFData.baseline_details;
        newCRF.haematology=CRFData.haematology;
        newCRF.physical_examination=CRFData.physical_examination;
        newCRF.symptom_check=CRFData.symptom_check;
        newCRF.parasitemia=CRFData.parasitemia;
        newCRF.molecular_genotype=CRFData.molecular_genotype;
        newCRF.concomitant_medications=CRFData.concomitant_medications;
        newCRF.adverse_events=CRFData.adverse_events;
        newCRF.final_study_outcome=CRFData.final_study_outcome;
        newCRF.signed=[relationship];
        newCRF.allowed=CRFData.allowed;
        return CRFRegistry.add(newCRF); 
        
      })
  }

  /**
  * @param {org.clinicaltrials.signCRF} CRFData
  * @transaction
  */
  function onSignCRF(CRFData){
    return getAssetRegistry('org.clinicaltrials.CRFDocument').then((CRFregistry)=>{
      return CRFregistry.get(CRFData.docID).then(function(data){
        data.signed.push(getCurrentParticipant());
        return CRFregistry.update(data);
      });
    });
  }

  /**
  * @param {org.clinicaltrials.grantAccess} memberData
  * @transaction
  */
  function onGrantAccess(memberData){
    return getAssetRegistry('org.clinicaltrials.prescription').then((prescriptionRegistry)=>{
        return prescriptionRegistry.get(memberData.pid).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return prescriptionRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccess} memberData
  * @transaction
  */
  function onRevokeAccess(memberData){

    return getAssetRegistry('org.clinicaltrials.prescription').then((prescriptionRegistry)=>{
        return prescriptionRegistry.get(memberData.pid).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return prescriptionRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.grantAccessCRF} memberData
  * @transaction
  */
  function onGrantAccessCRF(memberData){
    return getAssetRegistry('org.clinicaltrials.CRFDocument').then((CRFDocumentRegistry)=>{
        return CRFDocumentRegistry.get(memberData.docID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return CRFDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessCRF} memberData
  * @transaction
  */
  function onRevokeAccessCRF(memberData){

    return getAssetRegistry('org.clinicaltrials.CRFDocument').then((CRFDocumentRegistry)=>{
        return CRFDocumentRegistry.get(memberData.pid).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return CRFDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.grantAccessProblem} memberData
  * @transaction
  */
  function onGrantAccessProblem(memberData){
    return getAssetRegistry('org.clinicaltrials.Problem').then((ProblemDocumentRegistry)=>{
        return ProblemDocumentRegistry.get(memberData.reportID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return ProblemDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessProblem} memberData
  * @transaction
  */
  function onRevokeAccessProblem(memberData){

    return getAssetRegistry('org.clinicaltrials.Problem').then((ProblemDocumentRegistry)=>{
        return ProblemDocumentRegistry.get(memberData.reportID).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return ProblemDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.grantAccessVitals} memberData
  * @transaction
  */
  function onGrantAccessVitals(memberData){
    return getAssetRegistry('org.clinicaltrials.Vitals').then((VitalsDocumentRegistry)=>{
        return VitalsDocumentRegistry.get(memberData.VitalID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return VitalsDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessVitals} memberData
  * @transaction
  */
  function onRevokeAccessVitals(memberData){

    return getAssetRegistry('org.clinicaltrials.Vitals').then((VitalsDocumentRegistry)=>{
        return VitalsDocumentRegistry.get(memberData.VitalID).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return VitalsDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.grantAccessAllergy} memberData
  * @transaction
  */
  function onGrantAccessAllergy(memberData){
    return getAssetRegistry('org.clinicaltrials.Allergy').then((AllergyDocumentRegistry)=>{
        return AllergyDocumentRegistry.get(memberData.reportID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return AllergyDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessAllergy} memberData
  * @transaction
  */
  function onRevokeAccessAllergy(memberData){

    return getAssetRegistry('org.clinicaltrials.Allergy').then((AllergyDocumentRegistry)=>{
        return AllergyDocumentRegistry.get(memberData.reportID).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return AllergyDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.grantAccessLabResult} memberData
  * @transaction
  */
  function onGrantAccessLabResult(memberData){
    return getAssetRegistry('org.clinicaltrials.Lab_result').then((LabResultDocumentRegistry)=>{
        return LabResultDocumentRegistry.get(memberData.reportID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return LabResultDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessLabResult} memberData
  * @transaction
  */
  function onRevokeAccessLabResult(memberData){

    return getAssetRegistry('org.clinicaltrials.Lab_result').then((LabResultDocumentRegistry)=>{
        return LabResultDocumentRegistry.get(memberData.reportID).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return LabResultDocumentRegistry.update(data);
        })
        
      })
  }

  /**
  * @param {org.clinicaltrials.grantAccessRadiologyReports} memberData
  * @transaction
  */
  function onGrantAccessRadiologyReports(memberData){
    return getAssetRegistry('org.clinicaltrials.Radiology_reports').then((radiologyReportDocumentRegistry)=>{
        return radiologyReportDocumentRegistry.get(memberData.reportID).then((data)=>{
          if(!data.allowed){
            data.allowed=[]
          }
          data.allowed.push(memberData.participant);
          return radiologyReportDocumentRegistry.update(data);
        })
        
      })
  }
  /**
  * @param {org.clinicaltrials.revokeAccessRadiologyReports} memberData
  * @transaction
  */
  function onRevokeAccessRadiologyReports(memberData){

    return getAssetRegistry('org.clinicaltrials.Radiology_reports').then((radiologyReportsDocumentRegistry)=>{
        return radiologyReportsDocumentRegistry.get(memberData.reportID).then((data)=>{
            var arr=[];
      data.allowed.forEach(function(item){
            if(item.getFullyQualifiedIdentifier()!==memberData.participant.getFullyQualifiedIdentifier()){      
              arr.push(item);
            }
        });      
        data.allowed = arr;
        return radiologyReportsDocumentRegistry.update(data);
        })
        
      })
  }


  /**
  * @param {org.clinicaltrials.createDrug} drugData
  * @transaction
  */
  function onCreateDrug(drugData){
    return getAssetRegistry('org.clinicaltrials.drug').then((drugRegistry)=>{
        var factory=getFactory();
        var drugID=drugData.drugID;
        var newDrug=factory.newResource('org.clinicaltrials','drug',drugID);
        var relationship=getCurrentParticipant();
        newDrug.type=drugData.type;
        newDrug.NDC=drugData.NDC;
        newDrug.product_name=drugData.product_name;
        newDrug.stength=drugData.stength;
        newDrug.dosage=drugData.dosage;
        newDrug.adverse_effects=drugData.adverse_effects;
        newDrug.precautions_or_warnings=drugData.precautions_or_warnings;
        newDrug.container_size=drugData.container_size;
        newDrug.lot_no=drugData.lot_no;
        newDrug.from=relationship;
        newDrug.to=drugData.to;
        newDrug.madeby=drugData.madeby;
        return drugRegistry.add(newDrug); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.createPhysicalExamReport} reportData
  * @transaction
  */
  function onCreatePhysicalExamReport(reportData){
    return getAssetRegistry('org.clinicaltrials.primary_care_physical_exam').then(reportRegistry=>{
        var factory=getFactory();
        var newReport=factory.newResource('org.clinicaltrials','primary_care_physical_exam',reportData.reportID);
      newReport.facility=reportData.facility;
        newReport.issues=reportData.issues;
        newReport.type=reportData.type;
        newReport.Eyes=reportData.Eyes;
        newReport.Nose=reportData.Nose;
        newReport.Ears=reportData.Ears;
        newReport.Mouth=reportData.Mouth;
        newReport.Throat=reportData.Throat;
        newReport.Neck=reportData.Neck;
        newReport.Respiratory=reportData.Respiratory;
        newReport.Cardiovascular=reportData.Cardiovascular;
        newReport.Chest=reportData.Chest;
        newReport.Gastrointestinal=reportData.Gastrointestinal;
        newReport.Male_genitourinary=reportData.Male_genitourinary;
        newReport.Female_genitourinary=reportData.Female_genitourinary;
        newReport.Lymphatic=reportData.Lymphatic;
        newReport.Skin=reportData.Skin;
        newReport.Musculoskeleton=reportData.Musculoskeleton;
        newReport.Neurologic=reportData.Neurologic;
        newReport.Psychiatric=reportData.Psychiatric;
        newReport.other_notes=reportData.other_notes;
        newReport.date=reportData.timestamp;
        newReport.Patient=reportData.Patient;
      // newReport.Doctor=[getCurrentParticipant()];
        return reportRegistry.add(newReport)
      })
  }
  /**
  * @param {org.clinicaltrials.createVitals} vitalData
  * @transaction
  */
  function onCreateVitals(vitalData){
    return getAssetRegistry('org.clinicaltrials.Vitals').then(vitalRegistry=>{
        var factory=getFactory();
        var newReport=factory.newResource('org.clinicaltrials','Vitals',vitalData.VitalID);
        var newVitalsEvent=factory.newEvent('org.clinicaltrials','onCreateVitalsReport');
        newReport.Weight=vitalData.Weight;
        newReport.Length=vitalData.Length;
        newReport.BP_Systolic=vitalData.BP_Systolic;
        newReport.BP_Diastolic=vitalData.BP_Diastolic;
        newReport.Pulse=vitalData.Pulse;
        newReport.Respiration=vitalData.Respiration;
        newReport.Temperature=vitalData.Temperature;
        newReport.Oxygen_Saturation=vitalData.Oxygen_Saturation;
        newReport.Head_Circumference=vitalData.Head_Circumference;
        newReport.Waist_Circumference=vitalData.Waist_Circumference;
        newReport.BMI=vitalData.BMI;
        newReport.other_notes=vitalData.other_notes;
        newReport.Patient=vitalData.Patient;
        newReport.Visit=vitalData.Visit;
        newVitalsEvent.VitalID=vitalData.VitalID;
        newVitalsEvent.Weight=vitalData.Weight;
        newVitalsEvent.Length=vitalData.Length;
        newVitalsEvent.BP_Systolic=vitalData.BP_Systolic;
        newVitalsEvent.BP_Diastolic=vitalData.BP_Diastolic;
        newVitalsEvent.Pulse=vitalData.Pulse;
        newVitalsEvent.Respiration=vitalData.Respiration;
        newVitalsEvent.Temperature=vitalData.Temperature;
        newVitalsEvent.Oxygen_Saturation=vitalData.Oxygen_Saturation;
        newVitalsEvent.Head_Circumference=vitalData.Head_Circumference;
        newVitalsEvent.Waist_Circumference=vitalData.Waist_Circumference;
        newVitalsEvent.BMI=vitalData.BMI;
        newVitalsEvent.other_notes=vitalData.other_notes;
        newVitalsEvent.Patient=vitalData.Patient;
        newVitalsEvent.Visit=vitalData.Visit;
        emit(newVitalsEvent);
        return vitalRegistry.add(newReport)
      })
  }
  /**
  * @param {org.clinicaltrials.createAppointment} appointmentData
  * @transaction
  */
  function oncreateAppointment(appointmentData){
    return getAssetRegistry('org.clinicaltrials.Appointment').then((appointmentRegistry)=>{

        var factory=getFactory();
        var appointmentID=appointmentData.AppointmentID
        var newAppointment=factory.newResource('org.clinicaltrials','Appointment',appointmentID)
        var newAppointmentEvent=factory.newEvent('org.clinicaltrials','onCreateAppointmentEvent');
        var relationship=getCurrentParticipant();
        newAppointment.Doctor=appointmentData.Doctor;
        newAppointment.AppointmentTime=appointmentData.AppointmentTime;
        // newAppointment.Patient=appointmentData.Patient;
        newAppointment.Patient=getCurrentParticipant();      
        newAppointment.Status="PENDING";
      
        newAppointmentEvent.AppointmentID=appointmentData.AppointmentID;
        newAppointmentEvent.Doctor=appointmentData.Doctor;
        newAppointmentEvent.Patient=getCurrentParticipant();
        newAppointmentEvent.Status="PENDING";
        newAppointmentEvent.AppointmentTime=appointmentData.AppointmentTime;
        emit(newAppointmentEvent);
        return appointmentRegistry.add(newAppointment); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.setAppointmentStatus} appointmentData
  * @transaction
  */
  function onsetAppointmentStatus(appointmentData){
    return getAssetRegistry('org.clinicaltrials.Appointment').then((appointmentRegistry)=>{
        var factory=getFactory();
        
        var newAppointmentEvent=factory.newEvent('org.clinicaltrials','onSetAppointmentStatus');
        var appointmentID=appointmentData.AppointmentID;
        return appointmentRegistry.get(appointmentID).then((data)=>{
                newAppointmentEvent.AppointmentID=appointmentID;
                newAppointmentEvent.Status=appointmentData.Status;
            data.Status=appointmentData.Status;
            data.comments=appointmentData.comments;
            emit(newAppointmentEvent)
            return appointmentRegistry.update(data);
            
        })
        
        
      })
  }

  /**
  * @param {org.clinicaltrials.createQuestionsPRO} PROData
  * @transaction
  */
  function onCreateQuestionsPRO(PROData){
    return getAssetRegistry('org.clinicaltrials.PRO').then((PRORegistry)=>{
        var factory=getFactory();
        var proid=PROData.proID
        var newPRO=factory.newResource('org.clinicaltrials','PRO',proid)
        var relationship=getCurrentParticipant();
        newPRO.Questions=PROData.Questions;
        newPRO.Patient=PROData.Patient;
        newPRO.CreatedBy=relationship;
        return PRORegistry.add(newPRO); 
        
      })
  }
  /**
  * @param {org.clinicaltrials.answersPRO} PROData
  * @transaction
  */
  function onAnswersPRO(PROData){
    return getAssetRegistry('org.clinicaltrials.PRO').then((PRORegistry)=>{
        var proid=PROData.proID;
        return PRORegistry.get(proid).then((data)=>{
                
            data.Answers=PROData.Answers;
            data.time=PROData.timestamp;
            return PRORegistry.update(data);
            
        })
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.giveScorePRO} PROData
  * @transaction
  */
  function onGiveScorePRO(PROData){
    return getAssetRegistry('org.clinicaltrials.PRO').then((PRORegistry)=>{
        var proid=PROData.proID;
        var curpart=getCurrentParticipant();
        return PRORegistry.get(proid).then((data)=>{
            var Doctorscores={
                    "Doctor":curpart,
                      "HealthScores":PROData.HealthScore
                  }
                if(data.DoctorScores==[]){
                  data.DoctorScores=[DoctorScores]
                }
              else{
                  data.DoctorScores.push(DoctorScores);
                  
                  }
            data.DoctorScores=PROData.Score;
            data.Time=PROData.timestamp;
            return PRORegistry.update(data);
            
        })
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.createDoctor} doctorData
  * @transaction
  */
  function oncreateDoctor(doctorData){
    return getAssetRegistry('org.clinicaltrials.Doctor').then((doctorRegistry)=>{
        var factory=getFactory();
        var participantKey=doctorData.participantKey; 
        var newDoctor=factory.newResource('org.clinicaltrials','Doctor',participantKey)
        var relationship=getCurrentParticipant(); 
            newDoctor.Name=doctorData.Name;
            newDoctor.Email_ID=doctorData.Email_ID;
        newDoctor.Mobile_No=doctorData.Mobile_No;
        newDoctor.Address=doctorData.Address;
        newDoctor.Department=doctorData.Department;
        newDoctor.Experience=doctorData.Experience;
        newDoctor.Qualification=doctorData.Qualification;
        newDoctor.Clinic=doctorData.Clinic;
        newDoctor.Medical_Registration_ID=doctorData.Medical_Registration_ID;
        newDoctor.Speciality=doctorData.Speciality;
        newDoctor.Certificates=doctorData.Certificates;

            return doctorRegistry.add(newDoctor);
            
        
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.createNurse} NurseData
  * @transaction
  */
  function oncreateNurse(NurseData){
    return getAssetRegistry('org.clinicaltrials.Nurse').then((NurseRegistry)=>{
        var factory=getFactory();
        var participantKey=NurseData.participantKey; 
        var newNurse=factory.newResource('org.clinicaltrials','Nurse',participantKey)
        var relationship=getCurrentParticipant(); 
            newNurse.Name=NurseData.Name;
            newNurse.Email_ID=NurseData.Email_ID;
        newNurse.Mobile_No=NurseData.Mobile_No;
        newNurse.Address=NurseData.Address;
      
      newNurse.Hospital=relationship;
            return NurseRegistry.add(newNurse);
            
        
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.createLab} LabData
  * @transaction
  */
  function oncreateLab(LabData){
    return getAssetRegistry('org.clinicaltrials.Lab').then((LabRegistry)=>{
        var factory=getFactory();
        var participantKey=LabData.participantKey; 
        var newLab=factory.newResource('org.clinicaltrials','Lab',participantKey)
        var relationship=getCurrentParticipant(); 
            newLab.Name=LabData.Name;
            newLab.Email_ID=LabData.Email_ID;
        newLab.Mobile_No=LabData.Mobile_No;
        newLab.Address=LabData.Address;
        newLab.Department=LabData.Department;
      newLab.Hospital=relationship;
            return NurseRegistry.add(newLab);
            
        
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.dischargePatient} dischargeData
  * @transaction
  */
  function onDischargePatient(dischargeData){
    return getAssetRegistry('org.clinicaltrials.Admit').then((admitRegistry)=>{
        var factory=getFactory();
        var newDischargePatientEvent=factory.newEvent('org.clinicaltrials','onDischargePatientEvent');
        var admitID=dischargeData.AdmitID;
        
        return admitRegistry.get(admitID).then((data)=>{
          newDischargePatientEvent.AdmitID=dischargeData.AdmitID;
          newDischargePatientEvent.Status="COMPLETED";
          newDischargePatientEvent.Discharge_Date=dischargeData.timestamp;
            data.Status="COMPLETED";
            data.Discharge_Date=dischargeData.timestamp;
            emit(newDischargePatientEvent);
            return admitRegistry.update(data);
            
        })
        
        
      })
  }
  /**
  * @param {org.clinicaltrials.createVisits} visitData
  * @transaction
  */
  function oncreateVisit(visitData){
  
    return getAssetRegistry('org.clinicaltrials.Visits').then((visitRegistry)=>{
        var factory=getFactory();
        var VisitID=visitData.VisitID; 
        var newVisit=factory.newResource('org.clinicaltrials','Visits',VisitID);
        var newVisitEvent=factory.newEvent('org.clinicaltrials','onCreateVisitEvent');
        var relationship=getCurrentParticipant(); 
        
        newVisit.Patient=visitData.Patient;
        newVisit.Doctor=visitData.Doctor;
        newVisit.Description=visitData.Description;
        newVisit.Visit_Date=visitData.Visit_Date;
        newVisit.Appointment=visitData.Appointment;
        newVisitEvent.VisitID=visitData.VisitID;
        newVisitEvent.Patient=visitData.Patient;
        newVisitEvent.Doctor=visitData.Doctor;
        newVisitEvent.Description=visitData.Description;
        newVisitEvent.Visit_Date=visitData.Visit_Date;
        newVisitEvent.Appointment=visitData.Appointment;
        emit(newVisitEvent);
            return visitRegistry.add(newVisit);
            
        
        
        
      })
  }


  /**
  * @param {org.clinicaltrials.createAdmit} admitData
  * @transaction
  */
  function oncreateAdmit(admitData){
  
    return getAssetRegistry('org.clinicaltrials.Admit').then((admitRegistry)=>{
        var factory=getFactory();
        
        var AdmitID=admitData.AdmitID; 
        var newAdmit=factory.newResource('org.clinicaltrials','Admit',AdmitID);
        var newAdmitEvent=factory.newEvent('org.clinicaltrials','onCreateAdmitEvent');
        var relationship=getCurrentParticipant(); 
        newAdmit.Patient=admitData.Patient;
        newAdmit.Description=admitData.Description;
        newAdmit.Admit_Date=admitData.Admit_Date;
        newAdmit.RoomNo=admitData.RoomNo;
        newAdmit.BedType=admitData.BedType;
        newAdmit.Status="ACTIVE";
        newAdmitEvent.AdmitID=AdmitID;
        newAdmitEvent.Patient=admitData.Patient;
        newAdmitEvent.Description=admitData.Description;
        newAdmitEvent.Admit_Date=admitData.Admit_Date;
        newAdmitEvent.RoomNo=admitData.RoomNo;
        newAdmitEvent.BedType=admitData.BedType;
        newAdmitEvent.Status="ACTIVE";
        emit(newAdmitEvent);
            return admitRegistry.add(newAdmit);
            
        
        
        
      })
  }

  /**
  * @param {org.clinicaltrials.createOperation} operationData
  * @transaction
  */
  function oncreateOperation(operationData){
  
    return getAssetRegistry('org.clinicaltrials.Operation').then((operationRegistry)=>{
        var factory=getFactory();
        
        var OperationID=operationData.OperationID; 
        var newOperation=factory.newResource('org.clinicaltrials','Operation',OperationID);
        var newOperationEvent=factory.newEvent('org.clinicaltrials','onCreateOperationEvent');
        var relationship=getCurrentParticipant(); 
        newOperation.Patient=operationData.Patient;
        newOperation.Doctor=operationData.Doctor;
        newOperation.Name_Of_Operation=operationData.Name_Of_Operation;
        newOperation.Description=operationData.Description;
        newOperation.Anesthesia=operationData.Anesthesia;
        newOperation.PreOperative_Diagnosis=operationData.PreOperative_Diagnosis;
        newOperation.PostOperative_Diagnosis=operationData.PostOperative_Diagnosis;
        newOperation.Operation_Started=operationData.Operation_Started;
        newOperation.Operation_Ended=operationData.Operation_Ended;
        newOperation.Visit=operationData.Visit;
        newOperationEvent.OperationID=OperationID;
        newOperationEvent.Patient=operationData.Patient;
        newOperationEvent.Doctor=operationData.Doctor;
        newOperationEvent.Name_Of_Operation=operationData.Name_Of_Operation;
        newOperationEvent.Description=operationData.Description;
        newOperationEvent.Anesthesia=operationData.Anesthesia;
        newOperationEvent.PreOperative_Diagnosis=operationData.PreOperative_Diagnosis;
        newOperationEvent.PostOperative_Diagnosis=operationData.PostOperative_Diagnosis;
        newOperationEvent.Operation_Started=operationData.Operation_Started;
        newOperationEvent.Operation_Ended=operationData.Operation_Ended;
        newOperationEvent.Visit=operationData.Visit;
        emit(newOperationEvent);
            return operationRegistry.add(newOperation);
            
        
        
        
      })
  }




