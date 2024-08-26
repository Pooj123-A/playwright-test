
import { test, expect } from "@playwright/experimental-ct-react";
import App1809 from "../example/App1809.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1809 />);
  await expect(component).toContainText("Learn React");
});
