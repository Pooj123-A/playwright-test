
import { test, expect } from "@playwright/experimental-ct-react";
import App1223 from "./App1223.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1223 />);
  await expect(component).toContainText("Learn React");
});
