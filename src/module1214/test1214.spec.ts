
import { test, expect } from "@playwright/experimental-ct-react";
import App1214 from "./App1214.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1214 />);
  await expect(component).toContainText("Learn React");
});
