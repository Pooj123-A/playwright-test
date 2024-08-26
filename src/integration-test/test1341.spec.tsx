
import { test, expect } from "@playwright/experimental-ct-react";
import App1341 from "../example/App1341.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1341 />);
  await expect(component).toContainText("Learn React");
});
