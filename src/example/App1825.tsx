
import { test, expect } from "@playwright/experimental-ct-react";
import App1825 from "./App1825.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1825 />);
  await expect(component).toContainText("Learn React");
});
