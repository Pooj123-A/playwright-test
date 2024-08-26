
import { test, expect } from "@playwright/experimental-ct-react";
import App1921 from "../example/App1921.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1921 />);
  await expect(component).toContainText("Learn React");
});
