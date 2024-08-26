
import { test, expect } from "@playwright/experimental-ct-react";
import App1049 from "../example/App1049.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1049 />);
  await expect(component).toContainText("Learn React");
});
