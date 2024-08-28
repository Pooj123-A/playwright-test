
import { test, expect } from "@playwright/experimental-ct-react";
import App1041 from "./App1041.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1041 />);
  await expect(component).toContainText("Learn React");
});
