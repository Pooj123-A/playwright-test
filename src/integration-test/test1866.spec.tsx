
import { test, expect } from "@playwright/experimental-ct-react";
import App1866 from "../example/App1866.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1866 />);
  await expect(component).toContainText("Learn React");
});
