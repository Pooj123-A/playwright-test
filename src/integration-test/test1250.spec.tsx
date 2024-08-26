
import { test, expect } from "@playwright/experimental-ct-react";
import App1250 from "../example/App1250.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1250 />);
  await expect(component).toContainText("Learn React");
});
