
import { test, expect } from "@playwright/experimental-ct-react";
import App1576 from "../example/App1576.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1576 />);
  await expect(component).toContainText("Learn React");
});
