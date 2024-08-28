
import { test, expect } from "@playwright/experimental-ct-react";
import App1316 from "./App1316.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1316 />);
  await expect(component).toContainText("Learn React");
});
