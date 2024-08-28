
import { test, expect } from "@playwright/experimental-ct-react";
import App1324 from "./App1324.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1324 />);
  await expect(component).toContainText("Learn React");
});
