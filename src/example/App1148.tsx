
import { test, expect } from "@playwright/experimental-ct-react";
import App1148 from "./App1148.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1148 />);
  await expect(component).toContainText("Learn React");
});
