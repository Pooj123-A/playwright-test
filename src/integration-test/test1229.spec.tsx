
import { test, expect } from "@playwright/experimental-ct-react";
import App1229 from "../example/App1229.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1229 />);
  await expect(component).toContainText("Learn React");
});
