
import { test, expect } from "@playwright/experimental-ct-react";
import App1138 from "../example/App1138.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1138 />);
  await expect(component).toContainText("Learn React");
});
