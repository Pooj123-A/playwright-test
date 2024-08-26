
import { test, expect } from "@playwright/experimental-ct-react";
import App1194 from "../example/App1194.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1194 />);
  await expect(component).toContainText("Learn React");
});
