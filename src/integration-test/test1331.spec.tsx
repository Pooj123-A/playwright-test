
import { test, expect } from "@playwright/experimental-ct-react";
import App1331 from "../example/App1331.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1331 />);
  await expect(component).toContainText("Learn React");
});
