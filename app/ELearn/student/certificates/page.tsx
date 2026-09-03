"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Award, Calendar, Download, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/shared/stat-card";
import { PageHeader, PageTitle, PageDescription } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";

const certificates = [
  {
    id: 1,
    title: "HTML & CSS Foundations",
    course: "Web Development Essentials",
    issued: "Jun 15, 2026",
    grade: "93%",
    identifier: "ET-CERT-2026-1042",
    image: "/courses/course-9.png",
  },
];

export default function StudentCertificates() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <PageHeader>
        <div>
          <PageTitle>Certificates</PageTitle>
          <PageDescription>
            View and share your earned certificates
          </PageDescription>
        </div>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total Earned" value="1" icon={<Award className="h-4 w-4" />} />
        <StatCard label="Active Courses" value="3" icon={<Award className="h-4 w-4" />} />
        <StatCard label="Average Grade" value="93%" icon={<Award className="h-4 w-4" />} trend={{ value: "Excellent", positive: true }} />
      </div>

      {certificates.length > 0 ? (
        <div className="space-y-4">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <CardContent className="relative bg-gradient-to-br from-brand/5 via-background to-success/5 p-0">
                <div className="flex flex-col items-center gap-6 p-8 sm:flex-row">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand/10">
                    <Award className="h-10 w-10 text-brand" />
                  </div>
                  <div className="flex-1 space-y-2 text-center sm:text-left">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.course}</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                      <Badge variant="brand" className="gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.issued}
                      </Badge>
                      <Badge variant="success">Grade: {cert.grade}</Badge>
                      <span className="text-[11px] text-muted-foreground">
                        {cert.identifier}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="mr-1 h-3.5 w-3.5" />
                      PDF
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-1 h-3.5 w-3.5" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Award className="h-6 w-6" />}
          title="No certificates yet"
          description="Complete courses to earn your first certificate. You're 1 course close!"
          action={
            <Button size="sm" variant="outline">
              Continue Learning
            </Button>
          }
        />
      )}
    </motion.main>
  );
}