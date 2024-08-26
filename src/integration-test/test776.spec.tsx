
import { test, expect } from "@playwright/experimental-ct-react";
import App776 from "../example/App776.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App776 />);
  await expect(component).toContainText("Learn React");
});
