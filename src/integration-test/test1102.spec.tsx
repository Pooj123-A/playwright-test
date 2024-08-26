
import { test, expect } from "@playwright/experimental-ct-react";
import App1102 from "../example/App1102.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1102 />);
  await expect(component).toContainText("Learn React");
});
