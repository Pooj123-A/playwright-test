
import { test, expect } from "@playwright/experimental-ct-react";
import App1103 from "../example/App1103.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1103 />);
  await expect(component).toContainText("Learn React");
});
