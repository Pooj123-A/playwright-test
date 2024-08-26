
import { test, expect } from "@playwright/experimental-ct-react";
import App1024 from "../example/App1024.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1024 />);
  await expect(component).toContainText("Learn React");
});
