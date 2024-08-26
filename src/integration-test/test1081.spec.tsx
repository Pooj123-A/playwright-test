
import { test, expect } from "@playwright/experimental-ct-react";
import App1081 from "../example/App1081.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1081 />);
  await expect(component).toContainText("Learn React");
});
