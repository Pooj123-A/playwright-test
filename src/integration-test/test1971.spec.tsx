
import { test, expect } from "@playwright/experimental-ct-react";
import App1971 from "../example/App1971.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1971 />);
  await expect(component).toContainText("Learn React");
});
