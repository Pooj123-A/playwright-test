
import { test, expect } from "@playwright/experimental-ct-react";
import App1374 from "./App1374.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1374 />);
  await expect(component).toContainText("Learn React");
});
