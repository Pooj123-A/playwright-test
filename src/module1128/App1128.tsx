
import { test, expect } from "@playwright/experimental-ct-react";
import App1128 from "./App1128.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1128 />);
  await expect(component).toContainText("Learn React");
});
