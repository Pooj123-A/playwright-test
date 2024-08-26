
import { test, expect } from "@playwright/experimental-ct-react";
import App1553 from "../example/App1553.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1553 />);
  await expect(component).toContainText("Learn React");
});
