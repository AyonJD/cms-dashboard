import { Container, Paper } from "@mui/material";
import Page from "src/components/Page";
import SelectProductForm from "src/components/_external-pages/selection-form/SelectProductForm";
import useSettings from "src/hooks/useSettings";
import demoTwoSidebarConfig from "src/layouts/config/demoTowSidebarConfig";
import DashboardLayout from "src/layouts/dashboard";

export default function SelectProduct() {
    const { themeStretch } = useSettings();
    return (
      <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
        <Page title="CMS | Book Service">
          <Container maxWidth={themeStretch ? false : 'xl'}>
            <Paper sx={{ p: 0 }}>
              <SelectProductForm />
            </Paper>
          </Container>
        </Page>
      </DashboardLayout>
    )
}