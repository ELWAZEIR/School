import { Router } from 'express';
const router = Router();

// const { adminRegister, adminLogIn, deleteAdmin, getAdminDetail, updateAdmin } = require('../controllers/admin-controller.js');

import * as Admin from "../controllers/admin-controller.js"

import  * as Student from '../controllers/student_controller.js';

import  * as Teacher from '../controllers/teacher-controller.js';

import  * as Class from '../controllers/class-controller.js';

import  * as Note from '../controllers/notice-controller.js';

import  * as Complain from '../controllers/complain-controller.js';

import  * as Subject from '../controllers/subject-controller.js';


// Admin
router.post('/AdminReg', Admin.adminRegister);
router.post('/AdminLogin', Admin.adminLogIn);
router.get("/Admin/:id", Admin.getAdminDetail)

// router.delete("/Admin/:id", deleteAdmin)

// router.put("/Admin/:id", updateAdmin)

// Student
router.post('/StudentReg', Student.studentRegister);
router.post('/StudentLogin', Student.studentLogIn)
router.get("/Students/:id", Student.getStudents)
router.get("/Student/:id", Student.getStudentDetail)
router.get("/StudentsCount", Student.getAllStudents)
router.delete("/Students/:id", Student.deleteStudents)
router.delete("/StudentsClass/:id", Student.deleteStudentsByClass)
router.delete("/Student/:id", Student.deleteStudent)
router.put("/Student/:id", Student.updateStudent)
router.put('/UpdateExamResult/:id', Student.updateExamResult)
router.put('/StudentAttendance/:id', Student.studentAttendance)
router.put('/RemoveAllStudentsSubAtten/:id', Student.clearAllStudentsAttendanceBySubject);
router.put('/RemoveAllStudentsAtten/:id', Student.clearAllStudentsAttendance);
router.put('/RemoveStudentSubAtten/:id', Student.removeStudentAttendanceBySubject);
router.put('/RemoveStudentAtten/:id', Student.removeStudentAttendance)

// Teacher
router.post('/TeacherReg', Teacher.teacherRegister);
router.post('/TeacherLogin', Teacher.teacherLogIn)
router.get("/Teachers/:id", Teacher.getTeachers)
router.get("/Teacher/:id", Teacher.getTeacherDetail)
router.delete("/Teachers/:id", Teacher.deleteTeachers)
router.delete("/TeachersClass/:id", Teacher.deleteTeachersByClass)
router.delete("/Teacher/:id", Teacher.deleteTeacher)
router.put("/TeacherSubject", Teacher.updateTeacherSubject)
router.post('/TeacherAttendance/:id', Teacher.teacherAttendance)

// Notice
router.post('/NoticeCreate', Note.noticeCreate);
router.get('/NoticeList/:id', Note.noticeList);
router.delete("/Notices/:id", Note.deleteNotices)
router.delete("/Notice/:id", Note.deleteNotice)
router.put("/Notice/:id", Note.updateNotice)

// Complain
router.post('/ComplainCreate', Complain.complainCreate);
router.get('/ComplainList/:id', Complain.complainList);

// Sclass
router.post('/SclassCreate', Class.sclassCreate);
router.get('/SclassList/:id', Class.sclassList);
router.get("/Sclass/:id", Class.getSclassDetail)
router.get("/Sclass/Students/:id", Class.getSclassStudents)
router.delete("/Sclasses/:id", Class.deleteSclasses)
router.delete("/Sclass/:id", Class.deleteSclass)

// Subject
router.post('/SubjectCreate', Subject.subjectCreate);
router.get('/AllSubjects/:id', Subject.allSubjects);
router.get('/ClassSubjects/:id', Subject.classSubjects);
router.get('/FreeSubjectList/:id', Subject.freeSubjectList);
router.get("/Subject/:id", Subject.getSubjectDetail)
router.delete("/Subject/:id", Subject.deleteSubject)
router.delete("/Subjects/:id", Subject.deleteSubjects)
router.delete("/SubjectsClass/:id", Subject.deleteSubjectsByClass)


export default router;