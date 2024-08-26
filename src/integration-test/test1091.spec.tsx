
import { test, expect } from "@playwright/experimental-ct-react";
import App1091 from "../example/App1091.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1091 />);
  await expect(component).toContainText("Learn React");
});
