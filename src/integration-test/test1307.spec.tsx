
import { test, expect } from "@playwright/experimental-ct-react";
import App1307 from "../example/App1307.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1307 />);
  await expect(component).toContainText("Learn React");
});
