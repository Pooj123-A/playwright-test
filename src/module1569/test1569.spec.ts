
import { test, expect } from "@playwright/experimental-ct-react";
import App1569 from "./App1569.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1569 />);
  await expect(component).toContainText("Learn React");
});
