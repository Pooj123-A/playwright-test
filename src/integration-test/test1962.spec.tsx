
import { test, expect } from "@playwright/experimental-ct-react";
import App1962 from "../example/App1962.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1962 />);
  await expect(component).toContainText("Learn React");
});
