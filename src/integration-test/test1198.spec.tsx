
import { test, expect } from "@playwright/experimental-ct-react";
import App1198 from "../example/App1198.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1198 />);
  await expect(component).toContainText("Learn React");
});
