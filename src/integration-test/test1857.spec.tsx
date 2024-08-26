
import { test, expect } from "@playwright/experimental-ct-react";
import App1857 from "../example/App1857.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1857 />);
  await expect(component).toContainText("Learn React");
});
