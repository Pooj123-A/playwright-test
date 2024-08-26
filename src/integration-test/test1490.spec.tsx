
import { test, expect } from "@playwright/experimental-ct-react";
import App1490 from "../example/App1490.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1490 />);
  await expect(component).toContainText("Learn React");
});
