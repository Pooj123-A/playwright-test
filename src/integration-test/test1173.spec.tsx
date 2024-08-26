
import { test, expect } from "@playwright/experimental-ct-react";
import App1173 from "../example/App1173.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1173 />);
  await expect(component).toContainText("Learn React");
});
