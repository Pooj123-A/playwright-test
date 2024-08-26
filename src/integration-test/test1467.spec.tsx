
import { test, expect } from "@playwright/experimental-ct-react";
import App1467 from "../example/App1467.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1467 />);
  await expect(component).toContainText("Learn React");
});
