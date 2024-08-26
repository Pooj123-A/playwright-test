
import { test, expect } from "@playwright/experimental-ct-react";
import App1078 from "./App1078.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1078 />);
  await expect(component).toContainText("Learn React");
});
