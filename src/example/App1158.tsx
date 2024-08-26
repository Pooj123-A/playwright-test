
import { test, expect } from "@playwright/experimental-ct-react";
import App1158 from "./App1158.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1158 />);
  await expect(component).toContainText("Learn React");
});
