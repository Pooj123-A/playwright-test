
import { test, expect } from "@playwright/experimental-ct-react";
import App1784 from "../example/App1784.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1784 />);
  await expect(component).toContainText("Learn React");
});
