
import { test, expect } from "@playwright/experimental-ct-react";
import App1330 from "./App1330.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1330 />);
  await expect(component).toContainText("Learn React");
});
