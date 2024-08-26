
import { test, expect } from "@playwright/experimental-ct-react";
import App1170 from "./App1170.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1170 />);
  await expect(component).toContainText("Learn React");
});
